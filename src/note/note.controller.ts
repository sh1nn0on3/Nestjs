import { Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { MyJwtGuard } from 'src/auth/guard';

@Controller('note')
@UseGuards(MyJwtGuard)
export class NoteController {
  constructor(private noteService: NoteService) {}
  @Get()
  GetNotes() {}

  @Get(':id')
  GetNoteById() {}

  @Post()
  insertNote() {}

  @Post(':id')
  updateNote() {}

  @Delete(':id')
  deleteNote() {}
}
