export type TechName = 'astro' | 'react' | 'tailwind' | 'figma';

export interface Project {
	name: string;
	description: string;
	image: string;
	tech: TechName[];
}

export const projects: Project[] = [
	{
		name: 'Portafolio',
		description:
			'Portafolio personal desarrollado con Astro y Tailwind, con animaciones y diseño responsive.',
		image:
			'https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
		tech: ['astro', 'react', 'tailwind', 'figma'],
	},
	{
		name: 'Banco Online',
		description:
			'Aplicación web de banca con panel de cuentas, transferencias y gráficos de gastos.',
		image:
			'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
		tech: ['astro', 'react', 'tailwind', 'figma'],
	},
	{
		name: 'Agenda Multiusuario',
		description:
			'Agenda compartida con calendarios por usuario, recordatorios y roles.',
		image:
			'https://images.pexels.com/photos/7428216/pexels-photo-7428216.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
		tech: ['astro', 'react', 'tailwind', 'figma'],
	},
];
