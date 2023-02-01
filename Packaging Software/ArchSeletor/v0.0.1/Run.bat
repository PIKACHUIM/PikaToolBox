::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCuDJGmW+0g1Kw9ofA2JPWiyE/gz+O313OWSsE4YR94PeYzQ+6SeM9w82QXFZ5UllklflM4YAwlkdxGkIAY3pg4=
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
::ZQ05rAF9IAHYFVzEqQIAIRBVTwyXfEqoBb1c2+336umTrV99
::eg0/rx1wNQPfEVWB+kM9LVsJDDSLN2q5DqBcyfr456q0p0EYV/Ywau8=
::fBEirQZwNQPfEVWB+kM9LVsJDDSLN2q5DqBcyfr456q0p0EYV/Ywau8=
::cRolqwZ3JBvQF1fEqQIAIRBVTwyXfEqoBb1c2+336umTrV99
::dhA7uBVwLU+EWGmN/0MzIA40
::YQ03rBFzNR3SWATExEs7KRhcWWQ=
::dhAmsQZ3MwfNWATExEs7KRhcWWQ=
::ZQ0/vhVqMQ3MEVWAtB9wGBJfTQeKKSubFLYUqNv+4++EtkIPNA==
::Zg8zqx1/OA3MEVWAtB9wGBJfTQeKKSubFLYUqNv+4++EtkIPNA==
::dhA7pRFwIByZRRm0/UkxKxNBDCWQP2P6NbAQ7evv4Pjn
::Zh4grVQjdCuDJGmW+0g1Kw9ofA2JPWiyE/gz+O313OWSsE4YR94PeYzQ+6SeM9w82QXFZ5UllklflM4YAwlkbAelIAosrA4=
::YB416Ek+ZG8=
::
::
::978f952a14a936cc963da21a135fa983
@echo OFF

reg Query "HKLM\Hardware\Description\System\CentralProcessor\0" | find /i "x86" > NUL && set OS=32BIT || set OS=64BIT

if %OS%==32BIT x86.exe
if %OS%==64BIT x64.exe