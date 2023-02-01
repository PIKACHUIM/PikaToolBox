#include <iostream>

#ifdef _MSC_VER
#pragma comment( linker, "/subsystem:\"windows\" /entry:\"mainCRTStartup\"" )
#endif
//#include <windows.h>

int main(int argc, char **argv) {
//    ShowWindow(FindWindow("ConsoleWindowClass",argv[0]),0); //查找窗口隐藏自身 ..
        std::cout << "Waiting for System Administrator Permissions Authorization" << std::endl;
    if (argc > 1) {
        std::cout << "Starting the Program from Command-Line Parameters........." << std::endl;
        system(argv[1]);
    } else {
        std::cout << "Starting the Program from the File LaunchConfig.ini......." << std::endl;
    }
    return 0;
}
