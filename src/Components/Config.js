if (!localStorage.getItem('apiKey')) {
  var apiKey = prompt("Please enter your flickr API key");
  localStorage.setItem('apiKey', apiKey);
} else {
  apiKey = localStorage.getItem('apiKey');
};
export default apiKey;