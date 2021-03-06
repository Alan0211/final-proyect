import { useState, useEffect } from "react";
import { createContext } from "react";
import getState from "./flux.js";
 
export const Context = createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		
		const [state, setState] = useState( getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore => setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			}));

		useEffect(() => {

			/* 	No agregar elementos que se cargan 
			*	automaticamente porque fallarán cuando 
			*	se incluya el jwt en la API 
			*/


			//state.actions.getProyectos("/proyectos")
			// state.actions.getActividades("/actividades")
			// state.actions.getUsuarios("/usuarios")

            state.actions.getHorasPorActividad('/HorasPorActividad')

			state.actions.getHorasProyectos("/HorasPorProyecto")
            

		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;