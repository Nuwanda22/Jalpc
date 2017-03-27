---
layout: post
title:  "ICMP echo reply 취약점"
date:   2016-11-20
desc: "ICMP echo reply 취약점에 대한 조사"
keywords: "icmp,echo,reply"
categories: [Network]
tags: [network,icmp]
icon: fa-globe
---

ICMP echo 메시지를 이용하여 공격하기 위한 정보를 수집하거나, 특정 장비 혹은 호스트를 flooding 하여 DoS공격이 가능함

ICMP redirect 메시지를 이용하여 공격대상의 라우팅 정보를 변경시키고, 변경된 라우팅 경로로 트래픽을 전송함으로써 공격자가 정보 수집 및 서비스의 장애 유발이 가능함 

공격자는 echo 패킷을 이용하여 네트워크 Topology와 라우터 뒤의 호스트를 파악이 가능

Echo 패킷을 flooding 함으로써 라우터 또는 호스트를 공격하여 DoS 공격을 할 가능성이 존재 

공격자가 위조된 redirect 패킷을 전송하면 라우터는 호스트에게 전달하며, 호스트는 자신의 라우팅 테이블을 변경하여 호스트는 라우팅 테이블에 의해 비정상적인 경로로 트래픽이 전송 가능

공격자가 소스IP를 victim의 IP로 위조하여 증폭하려는 네트워크의 broadcast 주소에 icmp request를 요청하면, 이에 대해 broadcast 내 모든 디바이스들이 해당 IP로 icmp echo reply로 응답하여 공격