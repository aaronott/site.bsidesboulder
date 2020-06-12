function SendToWebsiteIssue() {

    var payload = {
        "email": $('#email').val(),
        "message": $('#issue').val(),
        "ip": $('#ipaddress').val()
    }

    $.ajax({
        headers: {
            'Content-Type': 'application/json',
            'X-Amz-Invocation-Type': 'RequestResponse',
            'X-Amz-Log-Type': 'None'
        },
        data: JSON.stringify(payload),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: 'https://ox0fidwev3.execute-api.us-east-1.amazonaws.com/prod/send-message-to-webmaster'
    });

    // clean up
    $('#email').val('');
    $('#issue').val('');
}

$(document).ready(function() {
    var ipdata = $.get( "https://api.ipify.org/?format=json", function(data) {
        $('#ipaddress').val(JSON.stringify(data));
    });
});
