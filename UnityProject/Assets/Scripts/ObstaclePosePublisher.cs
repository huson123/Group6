using UnityEngine;
using Unity.Robotics.ROSTCPConnector;
using RosMessageTypes.Geometry;

/// <summary>
/// Publishes the obstacle's pose to ROS in real-time for safety monitoring.
/// Attach this script to the moving obstacle GameObject.
/// </summary>
public class ObstaclePosePublisher : MonoBehaviour
{
    [Header("ROS Configuration")]
    [Tooltip("ROS topic name for publishing obstacle pose")]
    public string topicName = "/unity/obstacle_pose";
    
    [Header("Publishing Settings")]
    [Tooltip("Publish frequency in Hz (0 = every FixedUpdate)")]
    [Range(0, 60)]
    public float publishRate = 50f;
    
    private ROSConnection ros;
    private float publishInterval;
    private float timeSinceLastPublish;

    void Start()
    {
        // Initialize ROS connection
        ros = ROSConnection.GetOrCreateInstance();
        ros.RegisterPublisher<PoseMsg>(topicName);
        
        // Calculate publish interval
        publishInterval = publishRate > 0 ? 1f / publishRate : 0f;
        timeSinceLastPublish = 0f;
        
        Debug.Log($"[ObstaclePosePublisher] Started publishing to {topicName} at {publishRate}Hz");
    }

    void FixedUpdate()
    {
        // Throttle publishing based on publish rate
        if (publishRate > 0)
        {
            timeSinceLastPublish += Time.fixedDeltaTime;
            if (timeSinceLastPublish < publishInterval)
                return;
            
            timeSinceLastPublish = 0f;
        }
        
        PublishPose();
    }

    void PublishPose()
    {
        // Convert Unity coordinates to ROS coordinates
        // Unity: X=right, Y=up, Z=forward
        // ROS: X=forward, Y=left, Z=up
        PoseMsg pose = new PoseMsg
        {
            position = new PointMsg
            {
                x = transform.position.z,   // Unity Z → ROS X (forward)
                y = -transform.position.x,  // Unity -X → ROS Y (left)
                z = transform.position.y    // Unity Y → ROS Z (up)
            },
            orientation = new QuaternionMsg
            {
                x = 0,
                y = 0,
                z = 0,
                w = 1
            }
        };
        
        ros.Publish(topicName, pose);
    }

    void OnDestroy()
    {
        Debug.Log($"[ObstaclePosePublisher] Stopped publishing to {topicName}");
    }

#if UNITY_EDITOR
    void OnDrawGizmos()
    {
        // Draw obstacle position indicator in Scene view
        Gizmos.color = Color.red;
        Gizmos.DrawWireSphere(transform.position, 0.15f);
    }
#endif
}
