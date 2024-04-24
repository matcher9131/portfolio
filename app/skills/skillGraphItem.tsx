const Star = (): JSX.Element => {
    return (
        <svg viewBox="-100 -100 200 200" className="w-3 animate-[magnification_500ms_forwards]">
            <polygon
                fill="yellow"
                fillRule="nonzero"
                points="0,-100 -58.78,80.90 95.11,-30.90 -95.11,-30.90 58.78,80.90"
            />
        </svg>
    );
};

type SkillGraphItemProps = {
    readonly name: string;
    readonly value: number;
};

const SkillGraphItem = ({ name, value }: SkillGraphItemProps): JSX.Element => {
    return (
        <>
            <dt>{name}</dt>
            <dd className="flex">
                {new Array(5).fill(0).map((_, i) => (
                    <div key={i} className="relative">
                        {i < value && <Star />}
                    </div>
                ))}
            </dd>
        </>
    );
};

export default SkillGraphItem;
