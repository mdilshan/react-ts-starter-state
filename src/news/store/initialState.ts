export interface IState {
    error: string;
    loading: boolean;
    data: Array<any>;
}

const initialState: IState = {
    error: '',
    loading: false,
    data: []
};

export default initialState;

