export const contactUs = async (formData) => {
  try {
    const res = await fetch('http://localhost:3000/api/contactUs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    return { status: res.status, data };
  } catch (error) {
    console.error('error:', error);
    return { status: 500, data: { message: 'Server error' } };
  }
};