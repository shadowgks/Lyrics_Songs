$(document).ready(function() {
    $('#example,#example2').DataTable({
      responsive: true
    })
    .columns.adjust()
    .responsive.recalc();
});