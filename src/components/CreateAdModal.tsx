import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from './form/input';




export function CreateAdModal() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed ' />

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]
          shadow-lg shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Publique um Anúncio</Dialog.Title>
                <form className='mt-8 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-semibold' htmlFor="game">Qual o Game?</label>
                        <Input id="game" placeholder='Selecione o game que deseja jogar' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input id="name" placeholder='Como te chamam dentro do game?' />
                    </div>

                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="yearsPlaying">Joga há quantos anos</label>
                            <Input id="yearsPlaying" type='number' placeholder='Tudo bem ser ZERO' />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="discord">Qual seu discord?</label>
                            <Input id='discord' type="text" placeholder='Usuario#0000' />
                        </div>
                    </div>


                    <div className='flex gap-6'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="weekDays">Quando costuma jogar?</label>

                            <div className='grid grid-cols-4 gap-2'>
                                <button className='w-8 h-8 rounded bg-zinc-900 gap-1' title='Domingo'> D </button>
                                <button className='w-8 h-8 rounded bg-zinc-900 gap-1' title='Segunda'> S </button>
                                <button className='w-8 h-8 rounded bg-zinc-900 gap-1' title='Terça'> T </button>
                                <button className='w-8 h-8 rounded bg-zinc-900 gap-1' title='Quarta'> Q </button>
                                <button className='w-8 h-8 rounded bg-zinc-900 gap-1' title='Quinta '> Q </button>
                                <button className='w-8 h-8 rounded bg-zinc-900 gap-1' title='Sexta'> S </button>
                                <button className='w-8 h-8 rounded bg-zinc-900 gap-1' title='Sábado'> S </button>
                            </div>

                        </div>

                        <div className='flex flex-col gap-2 flex-1'>
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className='grid grid-cols-2 gap-2'>
                                <Input id='hourStart' type="time" placeholder='De' />
                                <Input id='hourEnd' type="time" placeholder='Até' />
                            </div>
                        </div>

                    </div>

                    <div className='mt-2 flex gap-2 text-sm'>
                        <Input type="checkbox" />
                        Costumo se conectar ao chat de voz
                    </div>
                    <footer className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                        <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600' type='submit'>
                            <GameController className='w-6 h-6' />
                            Encontrar
                        </button>
                    </footer>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}