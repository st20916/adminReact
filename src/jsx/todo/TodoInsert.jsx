import { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
    const [ value, setValue ] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <div className="input-group">
                <input 
                    className="form-control" 
                    placeholder="할 일을 입력하세요." 
                    value={value} 
                    onChange={onChange} 
                />
                <button type="submit" className="btn">
                    <i className="ri-add-circle-line"></i>
                </button>
            </div>
        </form>
    );
};

export default TodoInsert;