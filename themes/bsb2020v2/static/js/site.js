var webhook = "https://hooks.slack.com/services/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";

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
