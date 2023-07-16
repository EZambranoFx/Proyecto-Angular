export interface Interfaz {
    avg_spawns: number
    candy: string
    candy_count: number
    egg: string
    height: string
    id: number
    img: string
    multipliers: number[]
    name: string
    next_evolution: NextEvolution[]
    num: string
    spawn_chance: number
    spawn_time: string
    type: string[]
    weaknesses: string[]
    weight: string
}
export interface NextEvolution {
    name: string
    num: string
  }
