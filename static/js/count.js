function getVisitors() {
    $.ajax({
        url: 'https://countvisitor.azurewebsites.net/api/visitor/last',
        type: 'get',
        success: function (data) {
            var p = document.getElementById('p');
            if (data == null) p.innerText = '0';
            else p.innerText = data.key;
        }
    });
}

function postVisitors() {
    $.ajax({
        url: 'https://countvisitor.azurewebsites.net/api/visitor',
        type: 'post',
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        data: JSON.stringify({
            referer: document.referrer,
            ipaddress: ip()
        }),
        success: function (data) {
            console.log(JSON.stringify(data));
        }
    });
}

$(document).ready(function () {
    pre_content = $("#jalpc_site_pv").html();
    $("#jalpc_site_pv").html(pre_content);
    var website_count = 0;
    $("#jalpc_site_pv").html('<span class="navy">' + website_count + '</span>&nbsp;<span data-i18n="link.view">views</span>&nbsp;||&nbsp;' + pre_content);
    // $.ajax({
    //     type: "get",
    //     async: false,
    //     url: "https://vps.jarrekk.com:8443/api/v1.0/jalpc/pv_count",
    //     dataType: "jsonp",
    //     jsonp: "callback",
    //     jsonpCallback: "flightHandler",
    //     success: function (json) {
    //         console.log("Count json: " + JSON.stringify(json));
    //         var website_count = json.data;
    //         $("#jalpc_site_pv").html('<span class="navy">' + website_count + '</span>&nbsp;<span data-i18n="link.view">views</span>&nbsp;||&nbsp;' + pre_content);
    //     },
    //     error: function () {
    //         console.log('fail');
    //     }
    // });
});
