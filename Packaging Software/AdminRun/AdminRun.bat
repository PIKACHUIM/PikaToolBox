::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAjk
::fBw5plQjdCuDJHSdxFA/Ih5XWDitLG60NqcT4u34+/m7lkISWPEdd5fn6rWNK+EU40vjNaUi0G5NmdkJMDpccxulXBo6lU9Gu22LBdKS/QbiRSg=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSTk=
::cBs/ulQjdF65
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+IeA==
::cxY6rQJ7JhzQF1fEqQJhZksaHErSXA==
::ZQ05rAF9IBncCkqN+0xwdVsFAlTMbCXqZg==
::ZQ05rAF9IAHYFVzEqQIRLBZdQg2RKHm7EroOqNj+/eeOsV4UW+wsOKPaz7qNKOUBig==
::eg0/rx1wNQPfEVWB+kM9LVsJDCWGMWK0NKASpu3j6oo=
::fBEirQZwNQPfEVWB+kM9LVsJDCWGMWK0NKASpu3j6oo=
::cRolqwZ3JBvQF1fEqQIRLBZdQg2RKHm7EroOqNj+/eeOsV4UW+wsOKPaz7qNKOUBig==
::dhA7uBVwLU+EWHiN5lEgKRhRDC2MKG62Crwb7ebvr96CoUUTW+4wf5abkpeGIe4U8E3rYN9t9XUU1IsgGB8WHg==
::YQ03rBFzNR3SWATE1UsiOwtVTwHCFWWuA7kQ4e/+4f7HlkgeXOwwdIDcw/TGA+gS5EL+fZk4nzp5l4VATDdMelzL
::dhAmsQZ3MwfNWATE100gMQldSwyWfDnqVOdcoMuyr8uOsF4NVeE6OKbVzrGCLOkU70vwNaIo1XJUl8cDCwIYNjGjbwEzs2ZNoy3FFMjS/0/NXkzHpmo8FyVGjmTYmDh7UtZ7n9EV1iTe
::ZQ0/vhVqMQ3MEVWAtB9weVUEAlTMbAs=
::Zg8zqx1/OA3MEVWAtB9weVUEAlTMbAs=
::dhA7pRFwIByZRRml8E85JhJHWBaDKGSoRoUZ+uXy/PmOrUMOFM4+bYHY0rGcQA==
::Zh4grVQjdCuDJHSdxFA/Ih5XWDitLG60NqcT4u34+/m7lkISWPEdd5fn6rWNK+EU40vjNaUi0G5NmdkJMDpccxulXBo6lU9Gu22LBdKS/Qr5Tyg=
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
echo Waiting for Authorization..
SET File=config.ini
if exist %File% (
	set /P OEM=<%File%
	echo Start from Config.ini File
	echo Program Name: %OEM%
	start %OEM%
) else (
	echo Start from Command-Line...
	echo Program Name: %1
	start %1
)


