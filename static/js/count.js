$(document).ready(function () {
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

    pre_content = $("#jalpc_site_pv").html();
    $("#jalpc_site_pv").html(pre_content);

    $.ajax({
        url: 'https://countvisitor.azurewebsites.net/api/visitor/last',
        type: 'get',
        success: function (json) {
            var website_count;
            
            if (data == null) website_count = '0';
            else website_count = json.key;

            $("#jalpc_site_pv").html('<span class="navy">' + website_count + '</span>&nbsp;<span data-i18n="link.view">views</span>&nbsp;||&nbsp;' + pre_content);
        }
    });
});
