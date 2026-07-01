/*******************************************************************************************************************************************************************************
 --------------------------------------------------------------------------------------API--------------------------------------------------------------------------------------
*******************************************************************************************************************************************************************************/

//In JavaScript, an API (Application Programming Interface) refers either to built-in browser tools (like DOM manipulation or Geolocation) or external web services
//used to fetch and send data across the internet. Developers most commonly use JavaScript's native fetch() method to communicate with 
//external web servers and retrieve data in JSON format.
// 1. Fetching Data from a Web API
// The modern, standard approach to interacting with third-party web services uses async/await.
// // //javascript
// Function to pull data from a public API
async function getUserData() {
  const url = 'https://randomuser.me/api/';
  
  try {
    const response = await fetch(url); // Sends a GET request
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json(); // Parses raw data into a JS object
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// // //2. Common Types of APIs in JavaScriptJavaScript
// //  utilizes multiple types of APIs depending on the environment:
/*  Browser APIs: Interfaces built right into the web browser. Examples include the DOM 
    API for changing HTML content, the Geolocation API for accessing user 
    coordinates, and the Web Audio API.
    
   Third-Party Web APIs: External services that require web requests, such as the
   Google Maps JavaScript API or weather information feeds.
   
   Server-Side APIs: Building custom endpoints using server environments 
   like Node.js combined with the Express Framework.
getUserData();
*/

// // // 3. HTTP Methods for External APIs
/* When interacting with data APIs, your requests rely on specific HTTP verbs to declare 
  actions:

1)  GET (Retrieves data.):- Default setting for fetch(url).

2)POST(Creates new data.):- fetch(url, { method: 'POST', body: JSON.stringify(data) })

3) PUT / PATCH (Updates existing data.) :- fetch(url, { method: 'PUT', body: JSON.stringify(data) })

4) DELETE (Removes data.) :- fetch(url, { method: 'DELETE' })
*/
