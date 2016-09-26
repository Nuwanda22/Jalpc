var site = prompt("input site (google, facebook, naver)", "");
var url;

switch (site) {
    case "google":
        url = "www.google.com";
        break;

    case "facebook":
        url = "www.facebook.com";
        break;

    case "naver":
        url = "www.naver.com";
        break;

    default:
        alert("no");
        break;
}

if(url)
{
    location.href = url;
}