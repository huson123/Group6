#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/vijt/ur10e_ros_noetic_unity/ROS/src/ros_tcp_endpoint"

# ensure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/vijt/ur10e_ros_noetic_unity/ROS/install/lib/python3/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/vijt/ur10e_ros_noetic_unity/ROS/install/lib/python3/dist-packages:/home/vijt/ur10e_ros_noetic_unity/ROS/build/lib/python3/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/vijt/ur10e_ros_noetic_unity/ROS/build" \
    "/usr/bin/python3" \
    "/home/vijt/ur10e_ros_noetic_unity/ROS/src/ros_tcp_endpoint/setup.py" \
    egg_info --egg-base /home/vijt/ur10e_ros_noetic_unity/ROS/build/ros_tcp_endpoint \
    build --build-base "/home/vijt/ur10e_ros_noetic_unity/ROS/build/ros_tcp_endpoint" \
    install \
    --root="${DESTDIR-/}" \
    --install-layout=deb --prefix="/home/vijt/ur10e_ros_noetic_unity/ROS/install" --install-scripts="/home/vijt/ur10e_ros_noetic_unity/ROS/install/bin"
