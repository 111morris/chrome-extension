// when user enters a limit and he saves the limit we store tha value in a storage and when he click reset we clear 

$(function () {

 chrome.storage.sync.get('limit', function (budget) {
  $('#limit').val(budget.limit);
 })
 $('#saveLimit').click(function () {
  let limit = $('#limit').val();
  
  if (limit) {
   chrome.storage.sync.set({ 'limit': limit }, function () {
    close();
   });
  }
 });

 $('#resetTotal').click(function () {
  chrome.storage.sync.set({ 'total': 0 });
  $('#limit').val(0);
 })
})