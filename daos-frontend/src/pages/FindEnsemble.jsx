import { useState } from "react";
import Error from "../components/others/Error";
import Loading from "../components/others/Loading";
import EnsembleFilter from "../components/page-components/find-ensemble/EnsembleFilter";
import Ensembles from "../components/page-components/find-ensemble/Ensembles";
import useFetch from "../scripts/useFetch";

export default function FindEnsemble() {

    /*
    // Filter state
    const filter = useState
    // filteredEnsemblesState
    const [filteredEnsemblesState, setFilteredEnsemblesState] = useState(null) 

    useEffect(() => {
        setFilteredEnsemblesState(ensembles.filter()) 
    }, [filter])
    */

    const { data: ensembles, isLoading, error } = useFetch("http://127.0.0.1:3000/ensembles");
    
    let visibleEnsemblesStart = 0;

    if(screen.width < 428 ) {
        visibleEnsemblesStart = 6;
    } else {
        visibleEnsemblesStart = 12;
    }

    const [visibleEnsembles, setVisibleEnsembles] = useState(visibleEnsemblesStart);

    function showMoreEnsembles() {
        setVisibleEnsembles(visibleEnsembles + visibleEnsemblesStart);
    }

    return ( 
        <div className='find-ensemble'>
            {isLoading && <Loading />}
            {error && <Error error={error} />}
            {ensembles && <EnsembleFilter ensembles={ensembles} />}
            {ensembles && <Ensembles ensembles={ensembles} visibleEnsembles={visibleEnsembles} showMoreEnsembles={showMoreEnsembles} />}
        </div>
    );
}