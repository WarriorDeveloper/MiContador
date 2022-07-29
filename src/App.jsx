import { useState } from 'react'

function App() {

	const [contador, setContador] = useState(0)

	const aumentarContador = () => {
		setContador(contador + 1)
	}

	return (
		<div className="container-fluid vh-100 bg-secondary" >
			<div className="row justify-content-center">
				<div className="col text-center p-5">
					<h1 className='card-title p-5'>Bienvenido a mi contador</h1>
					<button onClick={aumentarContador} className='btn btn-primary btn-lg'>
						Clickeame
					</button>
					<h2 className='p-5'>
						{contador}
					</h2>
				</div>
			</div>
		</div>
	)
}

export default App
