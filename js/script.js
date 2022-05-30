
$('#liveToastBtn').click(function(e) {
    $('#liveToast').toast("show");
})
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var recipient = button.getAttribute('data-bs-whatever')
  var all_text = button.getAttribute('data-bs-text')
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body #message-text')
  $('label[for="recipient-name"]').text(recipient);  
  modalBodyInput.innerHTML = all_text;
})

