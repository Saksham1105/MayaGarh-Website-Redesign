import React from 'react';
import Image from 'next/image';
import { ACCOLADES_DATA, ArchitecturalStatement } from '@/data/accolades.data';
import styles from './AccoladesSection.module.css';

interface ArchitecturalStatementsProps {
  statementsRef?: React.Ref<HTMLDivElement>;
}

export const ArchitecturalStatements: React.FC<ArchitecturalStatementsProps> = ({
  statementsRef,
}) => {
  return (
    <div ref={statementsRef} className={styles.architecturalContainer}>
      <div className={styles.statementsColumn}>
        {ACCOLADES_DATA.architecturalStatements.map((item: ArchitecturalStatement) => (
          <div key={item.id} className={styles.statementBlock}>
            <span className={styles.statementLabel}>{item.label}</span>
            <p className={styles.statementText}>{item.statement}</p>
          </div>
        ))}
      </div>

      {ACCOLADES_DATA.visualAsset && (
        <figure className={styles.visualFigure}>
          <div className={styles.imageWrapper}>
            <Image
              src={ACCOLADES_DATA.visualAsset.path}
              alt={ACCOLADES_DATA.visualAsset.altText}
              width={ACCOLADES_DATA.visualAsset.width}
              height={ACCOLADES_DATA.visualAsset.height}
              className={styles.architecturalImage}
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
            />
          </div>
          <figcaption className={styles.imageCaption}>
            {ACCOLADES_DATA.visualAsset.caption}
          </figcaption>
        </figure>
      )}
    </div>
  );
};
