import { useEffect, useRef } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components/";

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  const useEffectOnlyOnce = () => {
    // create reference for useEffect call
    const calledOnce = useRef(false);

    useEffect(() => {
      // if already called, returns nothing so the fetch operation is not continuously called
      if (calledOnce.current) {
        return;
      }
      // if it has not been called then calls the function getJobs() to fetch all jobs
      if (!calledOnce.current) {
        showStats();

        calledOnce.current = true;
      }
    });
  };

  useEffectOnlyOnce();
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <div>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </div>
  );
};

export default Stats;
