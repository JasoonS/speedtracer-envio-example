import assert = require("assert")
import { MockDb, SpeedtracerRaceResult } from "../generated/src/TestHelpers.gen";
import {
  EventsSummaryEntity,
  SpeedtracerRaceResult_ApprovalEntity,
} from "../generated/src/Types.gen";

import { Addresses } from "../generated/src/bindings/Ethers.bs";

import { GLOBAL_EVENTS_SUMMARY_KEY } from "../src/EventHandlers";


const MOCK_EVENTS_SUMMARY_ENTITY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
  speedtracerRaceResult_ApprovalCount: BigInt(0),
  speedtracerRaceResult_ApprovalForAllCount: BigInt(0),
  speedtracerRaceResult_OwnershipHandoverCanceledCount: BigInt(0),
  speedtracerRaceResult_OwnershipHandoverRequestedCount: BigInt(0),
  speedtracerRaceResult_OwnershipTransferredCount: BigInt(0),
  speedtracerRaceResult_PlayerBannedCount: BigInt(0),
  speedtracerRaceResult_ResultRecordedCount: BigInt(0),
  speedtracerRaceResult_TransferCount: BigInt(0),
};

describe("SpeedtracerRaceResult contract Approval event tests", () => {
  // Create mock db
  const mockDbInitial = MockDb.createMockDb();

  // Add mock EventsSummaryEntity to mock db
  const mockDbFinal = mockDbInitial.entities.EventsSummary.set(
    MOCK_EVENTS_SUMMARY_ENTITY
  );

  // Creating mock SpeedtracerRaceResult contract Approval event
  const mockSpeedtracerRaceResultApprovalEvent = SpeedtracerRaceResult.Approval.createMockEvent({
    owner: Addresses.defaultAddress,
    account: Addresses.defaultAddress,
    id: 0n,
    mockEventData: {
      chainId: 1,
      blockNumber: 0,
      blockTimestamp: 0,
      blockHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      srcAddress: Addresses.defaultAddress,
      transactionHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      transactionIndex: 0,
      logIndex: 0,
    },
  });

  // Processing the event
  const mockDbUpdated = SpeedtracerRaceResult.Approval.processEvent({
    event: mockSpeedtracerRaceResultApprovalEvent,
    mockDb: mockDbFinal,
  });

  it("SpeedtracerRaceResult_ApprovalEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualSpeedtracerRaceResultApprovalEntity = mockDbUpdated.entities.SpeedtracerRaceResult_Approval.get(
      mockSpeedtracerRaceResultApprovalEvent.transactionHash +
        mockSpeedtracerRaceResultApprovalEvent.logIndex.toString()
    );

    // Creating the expected entity
    const expectedSpeedtracerRaceResultApprovalEntity: SpeedtracerRaceResult_ApprovalEntity = {
      id:
        mockSpeedtracerRaceResultApprovalEvent.transactionHash +
        mockSpeedtracerRaceResultApprovalEvent.logIndex.toString(),
      owner: mockSpeedtracerRaceResultApprovalEvent.params.owner,
      account: mockSpeedtracerRaceResultApprovalEvent.params.account,
      id: mockSpeedtracerRaceResultApprovalEvent.params.id,
      eventsSummary: "GlobalEventsSummary",
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualSpeedtracerRaceResultApprovalEntity, expectedSpeedtracerRaceResultApprovalEntity, "Actual SpeedtracerRaceResultApprovalEntity should be the same as the expectedSpeedtracerRaceResultApprovalEntity");
  });

  it("EventsSummaryEntity is updated correctly", () => {
    // Getting the actual entity from the mock database
    let actualEventsSummaryEntity = mockDbUpdated.entities.EventsSummary.get(
      GLOBAL_EVENTS_SUMMARY_KEY
    );

    // Creating the expected entity
    const expectedEventsSummaryEntity: EventsSummaryEntity = {
      ...MOCK_EVENTS_SUMMARY_ENTITY,
      speedtracerRaceResult_ApprovalCount: MOCK_EVENTS_SUMMARY_ENTITY.speedtracerRaceResult_ApprovalCount + BigInt(1),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEventsSummaryEntity, expectedEventsSummaryEntity, "Actual SpeedtracerRaceResultApprovalEntity should be the same as the expectedSpeedtracerRaceResultApprovalEntity");
  });
});
