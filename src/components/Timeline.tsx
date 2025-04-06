import React, { Fragment } from "react";

export type WorkData = {
  jobtitle: string;
  company: string;
  descriptions: string[];
  dates: string;
  logolink: string | null;
  is_left: boolean;
};

type Props = {
  workdata: WorkData[];
};

const Timeline: React.FC<Props> = ({ workdata }: Props) => {
  if (!workdata) return <div />;

  return (
    <div className="flex flex-col gap-y-3 w-full my-4">
      <Circle />
      {workdata.map((datum: WorkData, key: React.Key | null | undefined) => {
        return (
          // TODO: add company logo
          <Fragment key={key}>
            <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
              {datum.is_left ? (
                <EventCard {...datum} />
              ) : (
                <div className="text-white text-right scrolling-fade-left">
                  {datum.dates}
                </div>
              )}

              <Pillar />
              {!datum.is_left ? (
                <EventCard {...datum} />
              ) : (
                <div className="text-white scrolling-fade-right">
                  {datum.dates}
                </div>
              )}
            </div>
            {Number(key) < workdata.length - 1 && <Circle />}
          </Fragment>
        );
      })}
      <Circle />
    </div>
  );
};

const Circle: React.FC = () => {
  return <div className="rounded-full w-4 h-4 bg-white mx-auto" />;
};

const Pillar: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-400 rounded-t-full rounded-b-full w-2 h-full mx-auto" />
  );
};

const EventCard: React.FC<WorkData> = ({
  jobtitle,
  company,
  descriptions,
  dates,
  logolink,
  is_left,
}: WorkData) => {
  return (
    <div
      className={`flex flex-col gap-y-2 border shadow-2xl shadow-white rounded-xl p-4 ${
        is_left ? "scrolling-fade-left" : "scrolling-fade-right"
      }`}
    >
      <div className="leading-tight">
        <div className="text-white font-bold text-lg border-b">{jobtitle}</div>
        <div className="text-sm text-white">{company}</div>
      </div>
      <div className="text-sm text-white leading-loose">
        <ul>
          {descriptions.map((description, key) => {
            return <li key={key}>{description}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
