cmake_minimum_required(VERSION 3.20)
project(Code)
set(CMAKE_CXX_STANDARD 23)
#关闭控制台窗口
#set(CMAKE_EXE_LINKER_FLAGS     "${CMAKE_EXE_LINKER_FLAGS} /SUBSYSTEM:WINDOWS")
#set(CMAKE_EXE_LINKER_FLAGS     "${CMAKE_EXE_LINKER_FLAGS} /ENTRY:\"mainCRTStartup\"")
#添加管理员权限
#set(CMAKE_EXE_LINKER_FLAGS     "${CMAKE_EXE_LINKER_FLAGS} /level='requireAdministrator' /uiAccess='false'")
add_executable(Code main.cpp)
