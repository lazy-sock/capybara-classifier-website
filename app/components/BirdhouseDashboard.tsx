import React from "react";

type BirdData = {
  name: string;
  role: "Father" | "Mother";
  lastSeen: string;
  lastFed?: string;
  imageUrl?: string;
};

type NewbornData = {
  id: number;
  name?: string;
  imageUrl?: string;
};

type FeedingReplay = {
  time: string;
  snapshotUrl?: string;
};

const BirdCard: React.FC<{ bird: BirdData }> = ({ bird }) => (
  <div className="flex w-[150px] flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-md">
    <img
      src={bird.imageUrl || "https://via.placeholder.com/100x100.png?text=Bird"}
      alt={bird.name}
      className="h-[100px] w-[100px] rounded-full border border-gray-300 object-cover"
    />
    <div className="text-center">
      <p className="text-lg font-semibold">{bird.name}</p>
      <p className="text-sm text-gray-500">{bird.role}</p>
    </div>
    <div className="text-center text-xs text-gray-400">
      <p>Seen: {bird.lastSeen}</p>
      {bird.lastFed && <p>Fed: {bird.lastFed}</p>}
    </div>
  </div>
);

const NewbornCard: React.FC<{ newborn: NewbornData }> = ({ newborn }) => (
  <div className="flex flex-col items-center">
    <img
      src={newborn.imageUrl || "https://via.placeholder.com/80x80.png?text=🐣"}
      alt={newborn.name || `Newborn ${newborn.id}`}
      className="h-20 w-20 rounded-full border border-yellow-300 object-cover"
    />
    <p className="mt-1 text-xs text-gray-600">
      {newborn.name || `Newborn ${newborn.id}`}
    </p>
  </div>
);

const FeedingReplayCard: React.FC<{ replay: FeedingReplay }> = ({ replay }) => (
  <div className="w-[160px] overflow-hidden rounded-xl shadow-md">
    <img
      src={
        replay.snapshotUrl ||
        "https://via.placeholder.com/160x100.png?text=Feed"
      }
      alt={`Feeding at ${replay.time}`}
      className="h-[100px] w-full object-cover"
    />
    <div className="bg-gray-100 px-2 py-1 text-center text-xs text-gray-600">
      🕒 {replay.time}
    </div>
  </div>
);

export default function BirdhouseApp() {
  const parents: BirdData[] = [
    {
      name: "Chirpy",
      role: "Father",
      lastSeen: "Today at 14:42",
      lastFed: "14:45",
    },
    {
      name: "Feather",
      role: "Mother",
      lastSeen: "Today at 14:40",
      lastFed: "14:43",
    },
  ];

  const newborns: NewbornData[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const feedingReplays: FeedingReplay[] = [
    { time: "14:45", snapshotUrl: "" },
    { time: "14:43", snapshotUrl: "" },
    { time: "13:58", snapshotUrl: "" },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-10 p-6">
      <h1 className="text-center text-4xl font-bold">Birdhouse Monitor</h1>

      {/* Parents */}
      <section className="space-y-4">
        <h2 className="text-center text-3xl font-semibold">Parent Birds</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {parents.map((bird, i) => (
            <BirdCard key={i} bird={bird} />
          ))}
        </div>
      </section>

      {/* Newborns */}
      <section className="space-y-4">
        <h2 className="text-center text-3xl font-semibold">Newborns</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {newborns.map((nb) => (
            <NewbornCard key={nb.id} newborn={nb} />
          ))}
        </div>
      </section>

      {/* Replays */}
      <section className="space-y-4">
        <h2 className="text-center text-3xl font-semibold">Feeding Replays</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {feedingReplays.map((replay, i) => (
            <FeedingReplayCard key={i} replay={replay} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm">
        Last updated: {new Date().toLocaleTimeString()}
      </footer>
    </div>
  );
}
