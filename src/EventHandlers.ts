/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
    SpeedtracerRaceResultContract_Approval_loader,
    SpeedtracerRaceResultContract_Approval_handler,
    SpeedtracerRaceResultContract_ApprovalForAll_loader,
    SpeedtracerRaceResultContract_ApprovalForAll_handler,
    SpeedtracerRaceResultContract_OwnershipHandoverCanceled_loader,
    SpeedtracerRaceResultContract_OwnershipHandoverCanceled_handler,
    SpeedtracerRaceResultContract_OwnershipHandoverRequested_loader,
    SpeedtracerRaceResultContract_OwnershipHandoverRequested_handler,
    SpeedtracerRaceResultContract_OwnershipTransferred_loader,
    SpeedtracerRaceResultContract_OwnershipTransferred_handler,
    SpeedtracerRaceResultContract_PlayerBanned_loader,
    SpeedtracerRaceResultContract_PlayerBanned_handler,
    SpeedtracerRaceResultContract_ResultRecorded_loader,
    SpeedtracerRaceResultContract_ResultRecorded_handler,
    SpeedtracerRaceResultContract_Transfer_loader,
    SpeedtracerRaceResultContract_Transfer_handler,
} from "../generated/src/Handlers.gen";

import {
    SpeedtracerRaceResult_ApprovalEntity,
    SpeedtracerRaceResult_ApprovalForAllEntity,
    SpeedtracerRaceResult_OwnershipHandoverCanceledEntity,
    SpeedtracerRaceResult_OwnershipHandoverRequestedEntity,
    SpeedtracerRaceResult_OwnershipTransferredEntity,
    SpeedtracerRaceResult_PlayerBannedEntity,
    SpeedtracerRaceResult_ResultRecordedEntity,
    SpeedtracerRaceResult_TransferEntity,
EventsSummaryEntity
} from "../generated/src/Types.gen";

export const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
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

    SpeedtracerRaceResultContract_Approval_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SpeedtracerRaceResultContract_Approval_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    speedtracerRaceResult_ApprovalCount: currentSummaryEntity.speedtracerRaceResult_ApprovalCount + BigInt(1),
  };

  const speedtracerRaceResult_ApprovalEntity: SpeedtracerRaceResult_ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      account: event.params.account      ,
      event_id: event.params.id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SpeedtracerRaceResult_Approval.set(speedtracerRaceResult_ApprovalEntity);
});
    SpeedtracerRaceResultContract_ApprovalForAll_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SpeedtracerRaceResultContract_ApprovalForAll_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    speedtracerRaceResult_ApprovalForAllCount: currentSummaryEntity.speedtracerRaceResult_ApprovalForAllCount + BigInt(1),
  };

  const speedtracerRaceResult_ApprovalForAllEntity: SpeedtracerRaceResult_ApprovalForAllEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      operator: event.params.operator      ,
      isApproved: event.params.isApproved      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SpeedtracerRaceResult_ApprovalForAll.set(speedtracerRaceResult_ApprovalForAllEntity);
});
    SpeedtracerRaceResultContract_OwnershipHandoverCanceled_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SpeedtracerRaceResultContract_OwnershipHandoverCanceled_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    speedtracerRaceResult_OwnershipHandoverCanceledCount: currentSummaryEntity.speedtracerRaceResult_OwnershipHandoverCanceledCount + BigInt(1),
  };

  const speedtracerRaceResult_OwnershipHandoverCanceledEntity: SpeedtracerRaceResult_OwnershipHandoverCanceledEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      pendingOwner: event.params.pendingOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SpeedtracerRaceResult_OwnershipHandoverCanceled.set(speedtracerRaceResult_OwnershipHandoverCanceledEntity);
});
    SpeedtracerRaceResultContract_OwnershipHandoverRequested_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SpeedtracerRaceResultContract_OwnershipHandoverRequested_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    speedtracerRaceResult_OwnershipHandoverRequestedCount: currentSummaryEntity.speedtracerRaceResult_OwnershipHandoverRequestedCount + BigInt(1),
  };

  const speedtracerRaceResult_OwnershipHandoverRequestedEntity: SpeedtracerRaceResult_OwnershipHandoverRequestedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      pendingOwner: event.params.pendingOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SpeedtracerRaceResult_OwnershipHandoverRequested.set(speedtracerRaceResult_OwnershipHandoverRequestedEntity);
});
    SpeedtracerRaceResultContract_OwnershipTransferred_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SpeedtracerRaceResultContract_OwnershipTransferred_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    speedtracerRaceResult_OwnershipTransferredCount: currentSummaryEntity.speedtracerRaceResult_OwnershipTransferredCount + BigInt(1),
  };

  const speedtracerRaceResult_OwnershipTransferredEntity: SpeedtracerRaceResult_OwnershipTransferredEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      oldOwner: event.params.oldOwner      ,
      newOwner: event.params.newOwner      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SpeedtracerRaceResult_OwnershipTransferred.set(speedtracerRaceResult_OwnershipTransferredEntity);
});
    SpeedtracerRaceResultContract_PlayerBanned_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SpeedtracerRaceResultContract_PlayerBanned_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    speedtracerRaceResult_PlayerBannedCount: currentSummaryEntity.speedtracerRaceResult_PlayerBannedCount + BigInt(1),
  };

  const speedtracerRaceResult_PlayerBannedEntity: SpeedtracerRaceResult_PlayerBannedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      player: event.params.player      ,
      until: event.params.until      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SpeedtracerRaceResult_PlayerBanned.set(speedtracerRaceResult_PlayerBannedEntity);
});
    SpeedtracerRaceResultContract_ResultRecorded_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SpeedtracerRaceResultContract_ResultRecorded_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    speedtracerRaceResult_ResultRecordedCount: currentSummaryEntity.speedtracerRaceResult_ResultRecordedCount + BigInt(1),
  };

  const speedtracerRaceResult_ResultRecordedEntity: SpeedtracerRaceResult_ResultRecordedEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      time: event.params.time      ,
      track: event.params.track      ,
      tokenId: event.params.tokenId      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SpeedtracerRaceResult_ResultRecorded.set(speedtracerRaceResult_ResultRecordedEntity);
});
    SpeedtracerRaceResultContract_Transfer_loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    SpeedtracerRaceResultContract_Transfer_handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    speedtracerRaceResult_TransferCount: currentSummaryEntity.speedtracerRaceResult_TransferCount + BigInt(1),
  };

  const speedtracerRaceResult_TransferEntity: SpeedtracerRaceResult_TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      event_id: event.params.id      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.SpeedtracerRaceResult_Transfer.set(speedtracerRaceResult_TransferEntity);
});
