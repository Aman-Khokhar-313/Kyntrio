export async function POST(request) {
  try {
    const formData = await request.formData();

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      budget: formData.get("budget"),
      services: JSON.parse(formData.get("services") || "[]"),
      message: formData.get("message"),
      attachment: formData.get("attachment"),
      timestamp: new Date().toISOString(),
    };

    // Validate required fields
    if (
      !contactData.name ||
      !contactData.email ||
      !contactData.budget ||
      !contactData.message ||
      contactData.services.length === 0
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // TODO: In a real implementation, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Upload file to storage if present
    // 4. Integrate with CRM

    console.log("Contact form submission:", contactData);

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return Response.json(
      {
        success: true,
        message: "Contact form submitted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
