---
layout: post
title:  "HockeyApp Xamarin"
date:   2017-03-29
desc: "HockeyApp with Xamarin.Forms"
keywords: "hockeyapp,xamarin,forms,android,ios,uwp"
categories: [C#]
permalink: /csharp/:year/:month/:day/:title.html
tags: [C#,Xamarin]
icon: fa-mobile
---

# HockeyApp을 이용한 베타 릴리즈

## HockeyApp이란?
간단히 말하자면 **앱 배포 및 베타테스트를 돕는 서비스**다.

### 기능
* 베타테스트에 대해 앱 배포 
* 버그리포트, 오류 등의 정보 보고
* 사용자 피드백을 정리
* 어떤 사용자가 해당 앱을 어떻게 활용하고 있는지, 분석 자료로 만들어서 앱 개발자에게 제공

### 지원 플랫폼
HockeyApp은 다음 플랫폼에서 사용 가능하다.

* Android 
* iOS 
* OS X  
* Windows
* Cordova 
* React Native 
* Unity 
* Xamarin

## Xamarin에서 사용법
위에서 말했듯이 HockeyApp은 Xamarin을 지원한다고 나와있지만 정확히 말하자면 **Xamarin.Android**와 **Xamarin.iOS**를 지원하는 것으로 **Xamarin.Forms**에서 사용하기 위해서는 몇가지 수정이 필요하다.

참고 자료  
[HockeySDK-Xamarin](https://github.com/bitstadium/HockeySDK-Xamarin)  
[How to integrate HockeyApp with Xamarin](https://support.hockeyapp.net/kb/client-integration-cross-platform/how-to-integrate-hockeyapp-with-xamarin)  
[HockeyApp in Xamarin.Forms](https://channel9.msdn.com/Blogs/raw-tech/HockeyApp-in-XamarinForms)  
[HockeyApp-Integration for Xamarin.Forms available?](https://forums.xamarin.com/discussion/55881/hockeyapp-integration-for-xamarin-forms-available)

### 시작
1. HockeyApp Dashboard에 앱을 Android와 iOS를 각각 만든다.  
[How to create a new app](https://support.hockeyapp.net/kb/app-management-2/how-to-create-a-new-app)
2. NuGet 패키지에서 **HockeySDK.Xamarin**을 Xamarin.Forms, Xamarin.Android 프로젝트와 Xamarin.iOS 프로젝트에 각각 설치해준다.

### 크러쉬 리포트

#### iOS
1. `AppDelegate.cs` 파일을 연다.
2. `using HockeyApp.iOS;`를 추가한다.
3. `global::Xamarin.Forms.Forms.Init ();` 위에 다음 코드를 추가한다.
``` c#
var manager = BITHockeyManager.SharedHockeyManager;
manager.Configure("$Your_App_Id");
manager.StartManager();
manager.Authenticator.AuthenticateInstallation(); // This line is obsolete in crash only builds
```  

#### Android
1. `MainActivity.cs` 파일을 연다.
2. `using HockeyApp.Android;`를 추가한다.
3. `global::Xamarin.Forms.Forms.Init (this, bundle);` 위에 다음 코드를 추가한다.
``` c#
CrashManager.Register(this, "$Your_App_Id");
```

### Beta 릴리즈 방법
**더 자세히 알아봐야 함**
* 수동 배포
* Jenkins
* VSTS
* TFS