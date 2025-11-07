export async function POST(request) {
  try {
    const quoteData = await request.json();

    // Validate required fields
    const requiredFields = [
      "company",
      "companySize",
      "industry",
      "goals",
      "timeline",
      "budget",
      "services",
      "contactInfo.name",
      "contactInfo.email",
    ];

    for (const field of requiredFields) {
      if (field.includes(".")) {
        const [parent, child] = field.split(".");
        if (!quoteData[parent] || !quoteData[parent][child]) {
          return Response.json(
            { error: `Missing required field: ${field}` },
            { status: 400 },
          );
        }
      } else {
        if (
          !quoteData[field] ||
          (Array.isArray(quoteData[field]) && quoteData[field].length === 0)
        ) {
          return Response.json(
            { error: `Missing required field: ${field}` },
            { status: 400 },
          );
        }
      }
    }

    // Add timestamp
    const enrichedQuoteData = {
      ...quoteData,
      timestamp: new Date().toISOString(),
      status: "pending",
    };

    // TODO: In a real implementation, you would:
    // 1. Save to database
    // 2. Send email notification to team
    // 3. Send confirmation email to client
    // 4. Calculate preliminary pricing based on selections
    // 5. Integrate with CRM/project management tools

    console.log("Quote request submission:", enrichedQuoteData);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return Response.json(
      {
        success: true,
        message: "Quote request submitted successfully",
        quoteId: `NWL-${Date.now()}`, // Generate simple quote ID
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Quote submission error:", error);

    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
