const INVALID_DATA_ERROR = 400;
const NOT_FOUND_ERROR = 404;
const DEFAULT_ERROR = 500;

const handleCatchErrors = (error) => {
    if (error.name === "CastError") {
        res.status(INVALID_DATA_ERROR).send({
            "message": `${error.name}.Invalid ID`
        });
    } else {
        res.status(DEFAULT_ERROR).send({
            "message": `${error.name}. Something went wrong`
        });
    }
}

export { INVALID_DATA_ERROR, NOT_FOUND_ERROR, DEFAULT_ERROR, handleCatchErrors };