
"use strict";

let ExecuteTrajectoryActionGoal = require('./ExecuteTrajectoryActionGoal.js');
let PlaceActionResult = require('./PlaceActionResult.js');
let PickupGoal = require('./PickupGoal.js');
let PlaceActionGoal = require('./PlaceActionGoal.js');
let MoveGroupActionFeedback = require('./MoveGroupActionFeedback.js');
let PlaceAction = require('./PlaceAction.js');
let PickupActionResult = require('./PickupActionResult.js');
let PlaceFeedback = require('./PlaceFeedback.js');
let MoveGroupSequenceActionGoal = require('./MoveGroupSequenceActionGoal.js');
let MoveGroupSequenceActionFeedback = require('./MoveGroupSequenceActionFeedback.js');
let ExecuteTrajectoryAction = require('./ExecuteTrajectoryAction.js');
let MoveGroupSequenceResult = require('./MoveGroupSequenceResult.js');
let MoveGroupFeedback = require('./MoveGroupFeedback.js');
let ExecuteTrajectoryResult = require('./ExecuteTrajectoryResult.js');
let ExecuteTrajectoryFeedback = require('./ExecuteTrajectoryFeedback.js');
let MoveGroupSequenceActionResult = require('./MoveGroupSequenceActionResult.js');
let MoveGroupSequenceAction = require('./MoveGroupSequenceAction.js');
let MoveGroupActionGoal = require('./MoveGroupActionGoal.js');
let PlaceActionFeedback = require('./PlaceActionFeedback.js');
let MoveGroupResult = require('./MoveGroupResult.js');
let PickupResult = require('./PickupResult.js');
let PickupActionFeedback = require('./PickupActionFeedback.js');
let ExecuteTrajectoryActionResult = require('./ExecuteTrajectoryActionResult.js');
let MoveGroupSequenceGoal = require('./MoveGroupSequenceGoal.js');
let ExecuteTrajectoryGoal = require('./ExecuteTrajectoryGoal.js');
let MoveGroupAction = require('./MoveGroupAction.js');
let MoveGroupGoal = require('./MoveGroupGoal.js');
let PlaceResult = require('./PlaceResult.js');
let PickupFeedback = require('./PickupFeedback.js');
let PlaceGoal = require('./PlaceGoal.js');
let ExecuteTrajectoryActionFeedback = require('./ExecuteTrajectoryActionFeedback.js');
let PickupActionGoal = require('./PickupActionGoal.js');
let PickupAction = require('./PickupAction.js');
let MoveGroupSequenceFeedback = require('./MoveGroupSequenceFeedback.js');
let MoveGroupActionResult = require('./MoveGroupActionResult.js');
let PositionConstraint = require('./PositionConstraint.js');
let CartesianTrajectory = require('./CartesianTrajectory.js');
let ConstraintEvalResult = require('./ConstraintEvalResult.js');
let MotionSequenceItem = require('./MotionSequenceItem.js');
let Grasp = require('./Grasp.js');
let LinkPadding = require('./LinkPadding.js');
let AllowedCollisionMatrix = require('./AllowedCollisionMatrix.js');
let PlannerInterfaceDescription = require('./PlannerInterfaceDescription.js');
let RobotState = require('./RobotState.js');
let RobotTrajectory = require('./RobotTrajectory.js');
let MotionPlanDetailedResponse = require('./MotionPlanDetailedResponse.js');
let GenericTrajectory = require('./GenericTrajectory.js');
let AllowedCollisionEntry = require('./AllowedCollisionEntry.js');
let OrientationConstraint = require('./OrientationConstraint.js');
let DisplayTrajectory = require('./DisplayTrajectory.js');
let GripperTranslation = require('./GripperTranslation.js');
let Constraints = require('./Constraints.js');
let BoundingVolume = require('./BoundingVolume.js');
let DisplayRobotState = require('./DisplayRobotState.js');
let JointConstraint = require('./JointConstraint.js');
let WorkspaceParameters = require('./WorkspaceParameters.js');
let LinkScale = require('./LinkScale.js');
let ObjectColor = require('./ObjectColor.js');
let OrientedBoundingBox = require('./OrientedBoundingBox.js');
let PlanningOptions = require('./PlanningOptions.js');
let KinematicSolverInfo = require('./KinematicSolverInfo.js');
let CollisionObject = require('./CollisionObject.js');
let PlanningSceneWorld = require('./PlanningSceneWorld.js');
let TrajectoryConstraints = require('./TrajectoryConstraints.js');
let JointLimits = require('./JointLimits.js');
let VisibilityConstraint = require('./VisibilityConstraint.js');
let CartesianTrajectoryPoint = require('./CartesianTrajectoryPoint.js');
let ContactInformation = require('./ContactInformation.js');
let PlaceLocation = require('./PlaceLocation.js');
let CostSource = require('./CostSource.js');
let MoveItErrorCodes = require('./MoveItErrorCodes.js');
let PlannerParams = require('./PlannerParams.js');
let PlanningSceneComponents = require('./PlanningSceneComponents.js');
let PositionIKRequest = require('./PositionIKRequest.js');
let MotionSequenceResponse = require('./MotionSequenceResponse.js');
let PlanningScene = require('./PlanningScene.js');
let CartesianPoint = require('./CartesianPoint.js');
let MotionPlanRequest = require('./MotionPlanRequest.js');
let MotionPlanResponse = require('./MotionPlanResponse.js');
let AttachedCollisionObject = require('./AttachedCollisionObject.js');
let MotionSequenceRequest = require('./MotionSequenceRequest.js');

module.exports = {
  ExecuteTrajectoryActionGoal: ExecuteTrajectoryActionGoal,
  PlaceActionResult: PlaceActionResult,
  PickupGoal: PickupGoal,
  PlaceActionGoal: PlaceActionGoal,
  MoveGroupActionFeedback: MoveGroupActionFeedback,
  PlaceAction: PlaceAction,
  PickupActionResult: PickupActionResult,
  PlaceFeedback: PlaceFeedback,
  MoveGroupSequenceActionGoal: MoveGroupSequenceActionGoal,
  MoveGroupSequenceActionFeedback: MoveGroupSequenceActionFeedback,
  ExecuteTrajectoryAction: ExecuteTrajectoryAction,
  MoveGroupSequenceResult: MoveGroupSequenceResult,
  MoveGroupFeedback: MoveGroupFeedback,
  ExecuteTrajectoryResult: ExecuteTrajectoryResult,
  ExecuteTrajectoryFeedback: ExecuteTrajectoryFeedback,
  MoveGroupSequenceActionResult: MoveGroupSequenceActionResult,
  MoveGroupSequenceAction: MoveGroupSequenceAction,
  MoveGroupActionGoal: MoveGroupActionGoal,
  PlaceActionFeedback: PlaceActionFeedback,
  MoveGroupResult: MoveGroupResult,
  PickupResult: PickupResult,
  PickupActionFeedback: PickupActionFeedback,
  ExecuteTrajectoryActionResult: ExecuteTrajectoryActionResult,
  MoveGroupSequenceGoal: MoveGroupSequenceGoal,
  ExecuteTrajectoryGoal: ExecuteTrajectoryGoal,
  MoveGroupAction: MoveGroupAction,
  MoveGroupGoal: MoveGroupGoal,
  PlaceResult: PlaceResult,
  PickupFeedback: PickupFeedback,
  PlaceGoal: PlaceGoal,
  ExecuteTrajectoryActionFeedback: ExecuteTrajectoryActionFeedback,
  PickupActionGoal: PickupActionGoal,
  PickupAction: PickupAction,
  MoveGroupSequenceFeedback: MoveGroupSequenceFeedback,
  MoveGroupActionResult: MoveGroupActionResult,
  PositionConstraint: PositionConstraint,
  CartesianTrajectory: CartesianTrajectory,
  ConstraintEvalResult: ConstraintEvalResult,
  MotionSequenceItem: MotionSequenceItem,
  Grasp: Grasp,
  LinkPadding: LinkPadding,
  AllowedCollisionMatrix: AllowedCollisionMatrix,
  PlannerInterfaceDescription: PlannerInterfaceDescription,
  RobotState: RobotState,
  RobotTrajectory: RobotTrajectory,
  MotionPlanDetailedResponse: MotionPlanDetailedResponse,
  GenericTrajectory: GenericTrajectory,
  AllowedCollisionEntry: AllowedCollisionEntry,
  OrientationConstraint: OrientationConstraint,
  DisplayTrajectory: DisplayTrajectory,
  GripperTranslation: GripperTranslation,
  Constraints: Constraints,
  BoundingVolume: BoundingVolume,
  DisplayRobotState: DisplayRobotState,
  JointConstraint: JointConstraint,
  WorkspaceParameters: WorkspaceParameters,
  LinkScale: LinkScale,
  ObjectColor: ObjectColor,
  OrientedBoundingBox: OrientedBoundingBox,
  PlanningOptions: PlanningOptions,
  KinematicSolverInfo: KinematicSolverInfo,
  CollisionObject: CollisionObject,
  PlanningSceneWorld: PlanningSceneWorld,
  TrajectoryConstraints: TrajectoryConstraints,
  JointLimits: JointLimits,
  VisibilityConstraint: VisibilityConstraint,
  CartesianTrajectoryPoint: CartesianTrajectoryPoint,
  ContactInformation: ContactInformation,
  PlaceLocation: PlaceLocation,
  CostSource: CostSource,
  MoveItErrorCodes: MoveItErrorCodes,
  PlannerParams: PlannerParams,
  PlanningSceneComponents: PlanningSceneComponents,
  PositionIKRequest: PositionIKRequest,
  MotionSequenceResponse: MotionSequenceResponse,
  PlanningScene: PlanningScene,
  CartesianPoint: CartesianPoint,
  MotionPlanRequest: MotionPlanRequest,
  MotionPlanResponse: MotionPlanResponse,
  AttachedCollisionObject: AttachedCollisionObject,
  MotionSequenceRequest: MotionSequenceRequest,
};
