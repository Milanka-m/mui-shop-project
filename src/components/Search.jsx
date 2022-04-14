import { TextField } from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField 
        label="search"
        variant="standard"
        fullWidth //растянули на всю ширину контейнера
        type='search' 
        value={value} 
        onChange={onChange} 
        sx={{
            mb: '24px', // добавили отступ снизу
        }}
    />;
};

export default Search;