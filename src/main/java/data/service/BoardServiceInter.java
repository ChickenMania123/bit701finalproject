package data.service;

import data.dto.BoardDto;

import java.util.List;

public interface BoardServiceInter {
    public void insertBoard(BoardDto dto);
    public List<BoardDto> getPagingList(int start, int perpage);
    public int getTotalCount();
    public BoardDto detailPage(int num);
    public void deleteBoard(int num);
    public void updateReadCount(int num);
}
