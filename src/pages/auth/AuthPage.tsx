import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthPage: React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate();

	const handle = (e: FormEvent) => {
		e.preventDefault()
		
		if (email === 'fedya' && password === 'fedya123') {
			localStorage.setItem('token', '1');
			navigate('/', { replace: true });
		}
	}
	return (
		<div>
			<form onSubmit={handle} className="form-horizontal">
				<input
					type="text"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<button>Ok</button>
			</form>
		</div>
	)
}
