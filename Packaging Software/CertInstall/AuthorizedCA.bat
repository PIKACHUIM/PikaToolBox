::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCuDJHSdxFA/Ih5XWDitLG60NqcT4u34+/m7lkISWPEdd5fn6rWNK+EU40vjNaUi0G5NmdkJMDhdbAaCYBwgqGJOik2GOMmgugzuHgaA5URQ
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSTk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJhZksaHErSXA==
::ZQ05rAF9IBncCkqN+0xwdVsFAlTMbCXqZg==
::ZQ05rAF9IAHYFVzEqQIAIRBVTwyXfEibRpYZ+vzy6eOEo1kYFMMqbIfUyL2UIfQa5UukQZki2ho=
::eg0/rx1wNQPfEVWB+kM9LVsJDDSLN2q5DqBcy8m7zO+VtkQbXeE+bIqb+6GaKO8B41/lYZ8i2Dpul8QAbA==
::fBEirQZwNQPfEVWB+kM9LVsJDIN48u5XxzHEEMvaZyVmJpTb0gzX/nI4X2NLpQXEig==
::cRolqwZ3JBvQF1fEqQK30tXRocUG5JOZJz3TCWwiKWxpSsvgt2fovQo+DdQ=
::dhA7uBVwLU+EWGmN/0MzIA4UaxaNKXva
::YQ03rBFzNR3SWATE100gMSldSwyWfDnqVOZc2OHw7umPtw06Ru0qaO8=
::dhAmsQZ3MwfNWATE100gMSldSwyWfDnqVOZc2OHw7umPtw06Ru0qaO8=
::ZQ0/vhVqMQ3MEVWAtB9weVUEAlTMbAs=
::Zg8zqx1/OA3MEVWAtB9weVUEAlTMbAs=
::dhA7pRFwIByZRRkDDoy1xdrQlPyhHeN15zHFLm4VB2x6QcjKkWfar+8=
::Zh4grVQjdCuDJHSdxFA/Ih5XWDitLG60NqcT4u34+/m7lkISWPEdd5fn6rWNK+EU40vjNaUi0G5NmdkJMDhdbAaCYBwgqGJOikWQI8+/kkLJQ0yMqE4oHgU=
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
title 皮卡丘证书授权工工具
mode con lines=20 cols=50
color 3f
cls
echo.
echo.
echo.
echo        ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
echo        ▇                                ▇
echo        ▇       ***正在安装证书***       ▇
echo        ▇                                ▇
echo        ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇
echo.
echo.
echo.
echo 执行结果: 
forfiles /p .\CA\ /s /c "cmd /c ..\certmgr.exe -add /all @path -s -r localMachine AuthRoot"
forfiles /p .\CA\ /s /c "cmd /c echo @path"