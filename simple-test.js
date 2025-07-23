console.log("Testing chat API...");

// Test if we can reach the API
const testAPI = async () => {
  try {
    console.log("Attempting to connect to http://localhost:3000/api/chat");
    
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello'
      })
    });

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);
    
    if (response.ok) {
      const data = await response.json();
      console.log("✅ SUCCESS - Chat API Response:", data);
    } else {
      const errorText = await response.text();
      console.log("❌ ERROR - Response:", errorText);
    }
    
  } catch (error) {
    console.log("❌ NETWORK ERROR:", error.message);
  }
};

// Run the test
testAPI();
