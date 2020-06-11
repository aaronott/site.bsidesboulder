var webhook = bota("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVENINzcyNFZCL0IwMTRVMkQ2MjNIL0FwazFqTVF5c3p3MUNFOWhDeEJMdXJiNA==");

function SendToWebsiteIssue() {

    var email = $('#email').val();
    var issue = $('#issue').val();
    var ip = $('#ipaddress').val();
    var text = "Email Address: [" + email + "]\n Issue: " + issue + "\n IP: " + ip;

    $.ajax({
        data: 'payload=' + JSON.stringify({
            "text": text
        }),
        dataType: 'json',
        processData: false,
        type: 'POST',
        url: webhook
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
