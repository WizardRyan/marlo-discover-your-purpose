$(document).ready(function() {
    $('#bt1').click(function() {
        $('#form1').attr('action',
                       'mailto:ryan.andersen117@gmail.com?subject=' +
                       $('#subj').val() + '&body=' + $('#bod').val());
        $('#form1').submit();
    });
});