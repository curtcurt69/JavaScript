function loadScript(scriptURL)
{
	var newScript = document.createElement("script");
	newScript.src = scriptURL;
	document.body.appendChild(newScript);
}

function loadData(URL)
{
// Create the XML request  
	xmlReq = null;
	if(navigator.appName == "Edge") xmlReq = new ActiveXObject("Microsoft.XMLHTTP");
	 else  xmlReq = new XMLHttpRequest();

	if(xmlReq==null) return; // Failed to create the request
	

	xmlReq.open("GET", URL, true);
// Anonymous function to handle changed request states
	xmlReq.onreadystatechange = function()
	{
		switch(xmlReq.readyState)
		{
		case 0:	// Uninitialized
			break;
		case 1: // Loading
			break;
		case 2: // Loaded
			break;
		case 3: // Interactive
			break;
		case 4:	// Done!
		// Retrieve the data between the <quote> tags
			ChangeData(xmlReq.responseText);
			break;
		default:
			break;
		}
	}

// Make the request
	xmlReq.send (null);
}



