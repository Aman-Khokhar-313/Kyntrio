import { useState, useCallback } from 'react';

export type SandboxStatus =
	| 'idle'
	| 'codegen-started'
	| 'codegen-generating'
	| 'codegen-complete'
	| 'codegen-error'
	| 'codegen-stopped'
	| 'refresh-requested'
	| 'refresh-complete';

interface SandboxState {
	status: SandboxStatus;
	isGenerating: boolean;
	hasError: boolean;

	setStatus: (status: SandboxStatus) => void;

	startCodeGen: () => void;
	setCodeGenGenerating: () => void;
	completeCodeGen: () => void;
	errorCodeGen: () => void;
	stopCodeGen: () => void;
	resetToIdle: () => void;
}

// Simple implementation without zustand
let globalStatus: SandboxStatus = 'idle';
const listeners = new Set<() => void>();

const getState = (): { status: SandboxStatus; isGenerating: boolean; hasError: boolean } => ({
	status: globalStatus,
	isGenerating: globalStatus === 'codegen-started' || globalStatus === 'codegen-generating',
	hasError: globalStatus === 'codegen-error',
});

const setStatus = (status: SandboxStatus) => {
	globalStatus = status;
	listeners.forEach(listener => listener());
};

export const useSandboxStore = (): SandboxState => {
	const [, forceUpdate] = useState({});

	const trigger = useCallback(() => forceUpdate({}), []);

	if (typeof window !== 'undefined') {
		listeners.add(trigger);
	}

	const state = getState();

	return {
		...state,
		setStatus,
		startCodeGen: () => setStatus('codegen-started'),
		setCodeGenGenerating: () => setStatus('codegen-generating'),
		completeCodeGen: () => setStatus('codegen-complete'),
		errorCodeGen: () => setStatus('codegen-error'),
		stopCodeGen: () => setStatus('codegen-stopped'),
		resetToIdle: () => setStatus('idle'),
	};
};
