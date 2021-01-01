import React from "react";
import styles from "./styles.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function FichaTecnica({ items }) {
	let { t } = useTranslation();
	return (
		<>
			<h2 className={styles.title}>{t("common:fichaTecnica")}</h2>
			<dl className={styles.ficha}>
				{items.map((item) => (
					<React.Fragment key={item.tarefa + item.executor}>
						<dd>{item.tarefa}</dd>
						<dt>{item.executor}</dt>
					</React.Fragment>
				))}
			</dl>
		</>
	);
}
