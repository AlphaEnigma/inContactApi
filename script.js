var token;
var baseUri;
var implicitUri = "https://api.incontact.com/InContactAuthorizationServer/Authenticate";
var client_id = "Reporting@GuyBrown";
var token_scope = "RealTimeDataAPI";
var redirect_uri = "";
var state_object = "myState";
 
function RedirectToAuthPage() {
    var url = implicitUri;
    url = url + "?state=" + state_object;
    url = url + "&response_type=token";
    url = url + "&client_id=" + encodeURIComponent(client_id);
    url = url + "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url = url + "&scope=" + encodeURIComponent(token_scope);
    window.location.href = url;
}

/* function getToken() {
  $("#getTokenDiv").html("getting token...");
  
  $.ajax({
    type: "POST",
    url: "https://api.incontact.com/InContactAuthorizationServer/Token",
    contentType: "application/json",
    dataType: "JSON",
    data: JSON.stringify({
      grant_type: "password",
      username: "", 
      password: "", 
    //  scope: ""
    }),
    headers: {
      Authorization: "basic " + window.btoa("Reporting@GuyBrown:4596309")  //YzZkYmRhMWVmYjkyNDQwODgzYjYyZTM0MTJkMGEwMmM=")
    },
    success: getTokenSuccess,
    error: getTokenError
  })
}

function getTokenSuccess(data) {
  token = data.access_token;
  baseuri = data.resource_server_base_uri;
  $("#getTokenDiv").html("token retrieved! base uri: " + baseURi);
  }
  
  function getTokenError(xhr, status, error) {
   $("#getTokenDiv").html("Error getting token: " + status + " - " + error);
  } */
