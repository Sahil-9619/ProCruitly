
export const createUser = async (formData) => {
  try {
    const res = await fetch('http://localhost:3000/api/auth/homepage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return { status: res.status, data };
  } catch (error) {
    console.error('Signup API error:', error);
    return { status: 500, data: { message: 'Server error' } };
  }
};
