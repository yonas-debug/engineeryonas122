import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    // Get all registered students (for admin view)
    const students = await sql`
      SELECT id, full_name, email, phone, date_of_birth, education_level, interests, created_at
      FROM students 
      ORDER BY created_at DESC
    `;

    return Response.json({ 
      success: true, 
      students: students,
      count: students.length 
    });

  } catch (error) {
    console.error('Error fetching students:', error);
    return Response.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}