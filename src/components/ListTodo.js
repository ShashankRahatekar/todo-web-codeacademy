import React from 'react';

const ListTodo = ({todos, onClickDone, onClickRemove}) => {
	const getList = todos.map((todo, key) => {
		return (
			<li className={ 'active' !== todo.status? 'surface-blue surface-styles entry-done': 'surface-blue surface-styles'} key={`todo_${key}_${todo.id}`}>
				<div className='entry'>
					<div className='entry-actions-container'>
						<button className='remove' onClick={() => onClickRemove(todo.id)} >Remove</button>
						<button className='done' onClick={() => onClickDone(todo.id)}>{ todo.status === 'active'? 'Done': 'Redo'}</button>
					</div>
					{todo.title}
				</div>
			</li>
		);
	})

	return (
		<div className='surface'>
			<ul className='	entries-list'>
				{getList}
			</ul>
		</div>
	);
}
export default ListTodo;