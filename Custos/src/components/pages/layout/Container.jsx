// Importa o módulo de estilos CSS do arquivo Container.module.css
import styles from './Container.module.css';

// Define o componente funcional Container
function Container(props) {
	// Retorna o JSX para renderização
	return (
		// Cria um div com classes de estilo dinâmicas
		<div className={`${styles.container} ${styles[props.customClass]}`}>
			{/* Renderiza o conteúdo filho passado para o Container */}
			{props.children}
		</div>
	);
}

// Exporta o componente Container para uso em outros arquivos
export default Container;



//CLASSE DINÂMINCA